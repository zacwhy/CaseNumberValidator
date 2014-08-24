
Constants = {};
Constants.weights = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
Constants.checkDigits = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'Z', 'J'];

function CaseNumberValidator(caseNumber) {
    this.caseNumber = caseNumber;

    var index = Constants.checkDigits.length - 1;
    this.checkDigit = caseNumber.charAt(index);
}

CaseNumberValidator.prototype.getValidCheckDigit = function () {
    var weightedSum = ValidatorHelper.getWeightedSum(Constants.weights, this.caseNumber);
    var divisor = Constants.checkDigits.length;
    var index = divisor - weightedSum % divisor - 2;
    return Constants.checkDigits[index];
};

CaseNumberValidator.prototype.isValid = function () {
    // todo improve
    if (this.caseNumber.length < Constants.weights.length + 1) {
        return false;
    }

    return this.getValidCheckDigit() == this.checkDigit.toUpperCase();
}


ValidatorHelper = {};

(function () {

    var obj = {
        getWeightedSum: function (weights, numbers) {
            var result = 0;

            for (var i = 0; i < weights.length; i++) {
                result += weights[i] * numbers.charAt(i);
            }

            return result;
        },
        caseNumberIsValid: function (caseNumber) {
            var validator = new CaseNumberValidator(caseNumber);
            return validator.isValid();
        }
    };

    ValidatorHelper = obj;
})();
