export default ({ props }) => {
    props.mid = (input, prop, options) =>
        options.__ccss({
            T: '50%',
            L: '50%',
            tf: 'translate(-50%, -50%)'
        })
}
