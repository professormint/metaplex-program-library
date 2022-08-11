/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js';
import * as beetSolana from '@metaplex-foundation/beet-solana';
import * as beet from '@metaplex-foundation/beet';

/**
 * Arguments used to create {@link CollectionPDA}
 * @category Accounts
 * @category generated
 */
export type CollectionPDAArgs = {
  mint: web3.PublicKey;
  candyMachine: web3.PublicKey;
};

export const collectionPDADiscriminator = [203, 128, 119, 125, 234, 89, 232, 157];
/**
 * Holds the data for the {@link CollectionPDA} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class CollectionPDA implements CollectionPDAArgs {
  private constructor(readonly mint: web3.PublicKey, readonly candyMachine: web3.PublicKey) {}

  /**
   * Creates a {@link CollectionPDA} instance from the provided args.
   */
  static fromArgs(args: CollectionPDAArgs) {
    return new CollectionPDA(args.mint, args.candyMachine);
  }

  /**
   * Deserializes the {@link CollectionPDA} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [CollectionPDA, number] {
    return CollectionPDA.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link CollectionPDA} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
  ): Promise<CollectionPDA> {
    const accountInfo = await connection.getAccountInfo(address);
    if (accountInfo == null) {
      throw new Error(`Unable to find CollectionPDA account at ${address}`);
    }
    return CollectionPDA.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey('eERFprSmhDX7an71Kqg5ZjG3JoeMqLAZN4DGkvmqr3M'),
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, collectionPDABeet);
  }

  /**
   * Deserializes the {@link CollectionPDA} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [CollectionPDA, number] {
    return collectionPDABeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link CollectionPDA} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return collectionPDABeet.serialize({
      accountDiscriminator: collectionPDADiscriminator,
      ...this,
    });
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link CollectionPDA}
   */
  static get byteSize() {
    return collectionPDABeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link CollectionPDA} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(CollectionPDA.byteSize, commitment);
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link CollectionPDA} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === CollectionPDA.byteSize;
  }

  /**
   * Returns a readable version of {@link CollectionPDA} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      mint: this.mint.toBase58(),
      candyMachine: this.candyMachine.toBase58(),
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const collectionPDABeet = new beet.BeetStruct<
  CollectionPDA,
  CollectionPDAArgs & {
    accountDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['mint', beetSolana.publicKey],
    ['candyMachine', beetSolana.publicKey],
  ],
  CollectionPDA.fromArgs,
  'CollectionPDA',
);
