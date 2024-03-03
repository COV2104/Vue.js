<template>
    <div>
        <h1>Ипотечный калькулятор</h1>
        <label for="loanAmount">Сумма кредита:</label>
        <input id="loanAmount" type="number" v-model="loanAmount" @input="calculatePayments" />

        <label for="interestRate">Процентная ставка (%):</label>
        <input id="interestRate" type="number" v-model="interestRate" @input="calculatePayments" />

        <label for="loanTerm">Срок кредита (в месяцах):</label>
        <input id="loanTerm" type="number" v-model="loanTerm" @input="calculatePayments" />

        <p>Ежемесячный платеж: {{ monthlyPayment }}</p>
        <p>Общая сумма выплаты: {{ totalPayment }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loanAmount: 0,
            interestRate: 0,
            loanTerm: 0
        };
    },
    computed: {
        monthlyPayment() {
            if (this.loanAmount && this.interestRate && this.loanTerm) {
                const rate = this.interestRate / 100 / 12;
                const months = this.loanTerm;
                const monthlyPayment = (this.loanAmount * rate) / (1 - Math.pow(1 + rate, -months));
                return monthlyPayment.toFixed(2);
            } else {
                return '0.00';
            }
        },
        totalPayment() {
            if (this.loanAmount && this.interestRate && this.loanTerm) {
                return (this.monthlyPayment * this.loanTerm).toFixed(2);
            } else {
                return '0.00';
            }
        }
    },
    methods: {
        calculatePayments() {
            
        }
    }
};
</script>