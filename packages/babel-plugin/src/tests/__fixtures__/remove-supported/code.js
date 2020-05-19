const supportedSingleProp = <Ui.elf display="block" />;
const supportedSinglePropWithExistingClassName = <Ui className="cls" display="block" />;
const supportedMultiProp = <Ui display="block" textAlign="center" />;
const supportedMultiPropWithExistingClassName = <Ui className="cls" display="block" textAlign="center" />;
const tagProperty = <Ui.h2 />;
const keepsOnNonStaticProp = <Ui margin={foo} />;