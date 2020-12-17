import { getCustomRepository, TransactionRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // Buscar do banco de dados
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const transaction = await transactionsRepository.findOne(id);

    // Não existe?
    if (!transaction) {
      throw new AppError('Transaction does not exist');
    }

    // Existe?
    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
