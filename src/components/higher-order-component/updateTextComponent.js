const updateTextComponent = (OriginalCOmponent) => {
    function NewTextComponent() {
        return <OriginalCOmponent style={{ fontSize: 30 }} />
    }
    return NewTextComponent;
}
export default updateTextComponent;