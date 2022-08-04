/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category MintNft
 * @category generated
 */
export type MintNftInstructionArgs = {
  creatorBump: number;
};
/**
 * @category Instructions
 * @category MintNft
 * @category generated
 */
export const mintNftStruct = new beet.BeetArgsStruct<
  MintNftInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['creatorBump', beet.u8],
  ],
  'MintNftInstructionArgs',
);
/**
 * Accounts required by the _mintNft_ instruction
 *
 * @property [_writable_] candyMachine
 * @property [] candyMachineCreator
 * @property [**signer**] payer
 * @property [_writable_] wallet
 * @property [_writable_] metadata
 * @property [_writable_] mint
 * @property [**signer**] mintAuthority
 * @property [**signer**] updateAuthority
 * @property [_writable_] masterEdition
 * @property [] tokenMetadataProgram
 * @property [] clock
 * @property [] recentBlockhashes
 * @property [] instructionSysvarAccount
 * @category Instructions
 * @category MintNft
 * @category generated
 */
export type MintNftInstructionAccounts = {
  candyMachine: web3.PublicKey;
  candyMachineCreator: web3.PublicKey;
  payer: web3.PublicKey;
  wallet: web3.PublicKey;
  metadata: web3.PublicKey;
  mint: web3.PublicKey;
  mintAuthority: web3.PublicKey;
  updateAuthority: web3.PublicKey;
  masterEdition: web3.PublicKey;
  tokenMetadataProgram: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  rent?: web3.PublicKey;
  clock: web3.PublicKey;
  recentBlockhashes: web3.PublicKey;
  instructionSysvarAccount: web3.PublicKey;
};

export const mintNftInstructionDiscriminator = [211, 57, 6, 167, 15, 219, 35, 251];

/**
 * Creates a _MintNft_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category MintNft
 * @category generated
 */
export function createMintNftInstruction(
  accounts: MintNftInstructionAccounts,
  args: MintNftInstructionArgs,
  programId = new web3.PublicKey('cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ'),
) {
  const [data] = mintNftStruct.serialize({
    instructionDiscriminator: mintNftInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.candyMachine,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.candyMachineCreator,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.wallet,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mintAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.updateAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.masterEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenMetadataProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.clock,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.recentBlockhashes,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.instructionSysvarAccount,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
