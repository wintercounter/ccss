const supportedSingleProp = <div className="displayblock" />;
const supportedSinglePropWithExistingClassName = <div className="cls displayblock" />;
const supportedMultiProp = <div className="displayblock text_aligncenter" />;
const supportedMultiPropWithExistingClassName = <div className="cls displayblock text_aligncenter" />;
const tagProperty = <h2 />;
const keepsOnNonStaticProp = <Ui margin={foo} />;