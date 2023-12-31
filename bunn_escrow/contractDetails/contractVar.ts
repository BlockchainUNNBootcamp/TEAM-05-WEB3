export const contractAddress = process.env
  .NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`;

export const ABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
    name: "Claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address payable", name: "toAddress", type: "address" },
      { internalType: "uint256", name: "deliveryTime", type: "uint256" },
      { internalType: "string", name: "description", type: "string" },
    ],
    name: "createTransaction",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "listTransactions",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "_id", type: "uint256" },
          { internalType: "bool", name: "paidStatus", type: "bool" },
          {
            internalType: "address payable",
            name: "receiver",
            type: "address",
          },
          { internalType: "address payable", name: "sender", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "uint256", name: "paymentWindow", type: "uint256" },
        ],
        internalType: "struct Escrow.Transaction[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
    name: "refundFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "transactionCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
    name: "transactionDetails",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "_id", type: "uint256" },
          { internalType: "bool", name: "paidStatus", type: "bool" },
          {
            internalType: "address payable",
            name: "receiver",
            type: "address",
          },
          { internalType: "address payable", name: "sender", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "uint256", name: "paymentWindow", type: "uint256" },
        ],
        internalType: "struct Escrow.Transaction",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "transactionId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "transactionIds",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "transactions",
    outputs: [
      { internalType: "uint256", name: "_id", type: "uint256" },
      { internalType: "bool", name: "paidStatus", type: "bool" },
      { internalType: "address payable", name: "receiver", type: "address" },
      { internalType: "address payable", name: "sender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "string", name: "description", type: "string" },
      { internalType: "uint256", name: "paymentWindow", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "viewAdmin",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];
