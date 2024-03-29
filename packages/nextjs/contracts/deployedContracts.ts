/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    Protocol: {
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "match_id",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "uuid",
              type: "string",
            },
            {
              indexed: false,
              internalType: "address",
              name: "user_address",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "total_points",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "pointsMerkleRoot",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "squadHash",
              type: "bytes32",
            },
          ],
          name: "SquadRegistered",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "match_id",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "rewardsClaimed",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "match_id",
              type: "string",
            },
          ],
          name: "claimRewards",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "uuid",
              type: "string",
            },
          ],
          name: "getMatchUserSquad",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "user_address",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "total_points",
                  type: "uint256",
                },
                {
                  internalType: "bytes32",
                  name: "pointsMerkleRoot",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "squadHash",
                  type: "bytes32",
                },
              ],
              internalType: "struct Protocol.MatchUserSquad",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "match_id",
              type: "string",
            },
          ],
          name: "isWinner",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "match_id",
              type: "string",
            },
            {
              internalType: "string",
              name: "uuid",
              type: "string",
            },
            {
              internalType: "address",
              name: "user_address",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "total_points",
              type: "uint256",
            },
            {
              internalType: "bytes32",
              name: "pointsMerkleRoot",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "squadHash",
              type: "bytes32",
            },
          ],
          name: "submitSquad",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
