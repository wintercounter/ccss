import type { StyledComponent, StyledProps, ThemeProviderProps, StyledInterface } from "styled-components";

import { CCSSProps, CCSSTransformedFn, Props } from "@cryptic-css/core";

export type UiProps = StyledProps<CCSSProps>;
export type UiPropsWithThemeProviderProps = UiProps & { children: ThemeProviderProps<object>["children"] };
export type UiComponent = StyledComponent<"div", object, UiProps>;
export type UiComponentFactories = {
	[TTag in keyof JSX.IntrinsicElements]: StyledComponent<TTag, object, UiProps>;
};

export type UiType = UiComponent & UiComponentFactories;

// For these we will let through width and height
const widthHeight = ["w", "h", "width", "height"] as const;
const exceptionalTags = {
	svg: widthHeight,
	img: widthHeight,
	object: widthHeight,
	iframe: widthHeight,
	canvas: widthHeight,
	embed: widthHeight,
	video: widthHeight,
	input: widthHeight,
};

const shouldForwardProp = (transformedFn, exceptions?) => (prop) =>
	(exceptions && exceptions.includes(prop)) ||
	prop === "children" ||
	prop === "theme" ||
	!transformedFn.registry.has(prop) ||
	transformedFn.registry.get(prop).htmlAttr;
const isSupportedTag = (styled, tag) => {
	// Non supported tags will simply fail to initialize
	try {
		styled[tag]("");
		return true;
	} catch {
		return false;
	}
};

const preserveStyledProps = (target: UiPropsWithThemeProviderProps, source: UiPropsWithThemeProviderProps) => {
	Object.assign(target, { theme: source.theme, children: source.children });
	return target;
};

const preservePropsOnCCSS: (
	input: UiPropsWithThemeProviderProps,
	prop: string,
	transformedFn: CCSSTransformedFn,
	inputObject: UiPropsWithThemeProviderProps
) => UiPropsWithThemeProviderProps = (input, prop, transformedFn, inputObject) =>
	preserveStyledProps(input, inputObject);

const preservePropsOnChild: typeof preservePropsOnCCSS = (input, prop, transformedFn, inputObject) => {
	Object.keys(inputObject.child).forEach((k) => {
		// for children with multiple comma-separated pseudo-selectors
		if (k.includes(",")) {
			k.split(",").forEach((subKey) => {
				const trimmedKey = subKey.trim();
				Object.assign(input, { [trimmedKey]: inputObject.child[k] });
				preserveStyledProps(inputObject.child[trimmedKey] as UiPropsWithThemeProviderProps, inputObject);
			});
		} else {
			preserveStyledProps(inputObject.child[k] as UiPropsWithThemeProviderProps, inputObject);
		}
	});

	return input;
};

type StyledCCSS = {
	Ui: UiType;
	ccss: CCSSTransformedFn;
};

type CreateStyledCCSS = (transformedFn: CCSSTransformedFn) => StyledCCSS;

interface CreateCreator {
	(styled: StyledInterface): CreateStyledCCSS;
}

const noop = () => undefined;

export const createCreator: CreateCreator = (styled) => (transformedFn: CCSSTransformedFn, id = 42) => {
	const { defaultProps = undefined } = transformedFn.options;
	const defaultTag = "div";

	// Just don't do anything with styled stuff
	transformedFn.setProps([
		[["children"], null, [noop], { ccssContext: false }],
		[["ccss", "css"], null, [preservePropsOnCCSS, "..."], { ccssContext: false }],
		[["child"], null, [preservePropsOnChild, "..."], { ccssContext: false }],
	] as Props);

	const Ui = (styled[defaultTag].withConfig({
		componentId: `${id}`,
		displayName: "1FE",
		shouldForwardProp: shouldForwardProp(transformedFn),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	}) as any)(transformedFn);
	Ui.defaultProps = defaultProps;

	// Recreates supported HTML tags (eg: Ui.section, Ui.ul)
	Object.keys(styled).forEach((tag) => {
		if (isSupportedTag(styled, tag)) {
			try {
				Ui[tag] = styled[tag].withConfig({
					componentId: `${tag}.${id}`,
					displayName: `1FE.${tag}`,
					shouldForwardProp: shouldForwardProp(transformedFn, exceptionalTags[tag]),
				})(transformedFn);
				Ui[tag].defaultProps = defaultProps;
			} catch {
				console.info(`you-eye: "${tag}" is not supported`);
			}
		}
	});
	return {
		Ui,
		ccss: transformedFn,
	};
};
