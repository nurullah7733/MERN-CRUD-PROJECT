import { toast } from 'react-toastify';

class inputValidation {
    isEmpty(value) {
        if (value.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    successMessage(msg) {
        toast.success(msg);
    }
    errorMessage(msg) {
        toast.error(msg);
    }
}

export const { isEmpty, successMessage, errorMessage } = new inputValidation();
