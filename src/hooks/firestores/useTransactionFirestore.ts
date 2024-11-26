import Transaction from "@app/stores/models/Transaction.model";
import firestore from "@react-native-firebase/firestore";

const TRANSACTIONS_COLLECTION = "transactions";
const useTransactionFirestore = () => {
  const addTransaction = async (transaction: Transaction): Promise<string> => {
    try {
      const transactionRef = await firestore()
        .collection(TRANSACTIONS_COLLECTION)
        .add(transaction);

      console.log("Transaction added with ID:", transactionRef.id);
      return transactionRef.id;
    } catch (error) {
      console.error("Error adding transaction:", error);
      throw error;
    }
  };
  return {
    addTransaction,
  };
};

export default useTransactionFirestore;
