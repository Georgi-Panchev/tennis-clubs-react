const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

class Validator {
    static validateRegistration(user, stateField) {
        let isFormValid = true;
        let errors = {};
        if (!user.username || user.username.length < 3 || user.username.length > 10) {
            errors.username = 'Username must be between 3 and 10 characters long!';
            isFormValid = false;
        }

        if (!user.password || user.password.length < 3 || user.password.length > 10) {
            errors.password = 'Password must be between 3 and 10 characters long!';
            isFormValid = false;
        }

        if (user.password !== user.confirmPassword) {
            errors.passwords = 'Passwords do not match!';
            isFormValid = false;
        }

        this.setState({ [stateField]: errors });
        return isFormValid;
    }

    static validateLogin(user, stateField) {
        let isFormValid = true;
        let errors = {};

        if (!user.username || user.username.length < 3 || user.username.length > 10) {
            errors.username = 'Username must be between 3 and 10 characters long!';
            isFormValid = false;
        }

        if (!user.password || user.password.length < 3 || user.password.length > 10) {
            errors.password = 'Password must be between 3 and 10 characters long!';
            isFormValid = false;
        }

        this.setState({ [stateField]: errors });
        return isFormValid;
    }

    static validateClub(club, stateField) {
        let isFormValid = true;
        let errors = {};
        if (!club.title || club.title.length < 3) {
            errors.title = 'Title bust be at lest 3 Symbols!';
            isFormValid = false;
        }

        if (!club.imageUrl || !pattern.test(club.imageUrl)) {
            errors.imageUrl = 'Enter valid image url!';
            isFormValid = false;
        }

        if (!club.city || !([ 'Sofia', 'Plovdiv', 'Varna', 'Burgas' ].includes(club.city))) {
            errors.city = 'Choose city!';
            isFormValid = false;
        }

        if (!club.rank || !([ 'Top', 'Medium', 'Low' ].includes(club.rank))) {
            errors.rank = 'Choose rank!';
            isFormValid = false;
        }

        if (!club.courts || club.courts < 1) {
            errors.courts = 'Courts must be one or more!';
            isFormValid = false;
        }

        this.setState({ [stateField]: errors });
        return isFormValid;
    }

    static validateTournament(tournament, stateField) {
        let isFormValid = true;
        let errors = {};
        if (!tournament.title || tournament.title.length < 3) {
            errors.title = 'Title bust be at lest 3 Symbols!';
            isFormValid = false;
        }

        if (!tournament.imageUrl || !pattern.test(tournament.imageUrl)) {
            errors.imageUrl = 'Enter valid image url!';
            isFormValid = false;
        }

        if (!tournament.balls || !([ 'Dunlop', 'Wilson', 'Head' ].includes(tournament.balls))) {
            errors.balls = 'Choose balls!';
            isFormValid = false;
        }

        if (!tournament.fee || tournament.fee < 1) {
            errors.fee = 'Fee must be grater than zero!';
            isFormValid = false;
        }

        this.setState({ [stateField]: errors });
        return isFormValid;
    }
}

export default Validator;
