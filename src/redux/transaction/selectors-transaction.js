import { createSelector } from '@reduxjs/toolkit';

const getTransactions = state => state.transactions.listTransactions;

export default { getTransactions };
