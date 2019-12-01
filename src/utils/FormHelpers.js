class FormHelpers {
    static handleFormChange(event, stateField) {
        const target = event.target;
        const field = target.name;
        let value = target.value;
        if (target.type === 'checkbox') {
            value = target.checked;
        }
        const stateObject = this.state[stateField];
        stateObject[field] = value;
        this.setState({ [stateField]: stateObject });
    }
}

export default FormHelpers;
