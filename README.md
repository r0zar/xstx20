## Extended STX20: Multi-Transaction Memo Inscriptions

Multi-Transaction Memo Inscriptions are designed to bypass the 34-byte limit of the Stacks blockchain's transaction memo field. This enhancement is ideal for embedding larger data sets, like small base64 encoded images, across multiple transactions, utilizing the transaction nonce for sequencing.

**How It Works**

1.  **Segmented Data Transmission**: Data exceeding the 34-byte limit is split into segments, each fitting within a single transaction memo.
2.  **Transaction Nonce for Sequencing**: The nonce of each transaction inherently orders the segments, eliminating the need for a separate sequence identifier in the memo.
3.  **Data Reconstruction**: Indexers recognize and reassemble these data segments using the transaction nonce as a sequence guide.
    
    
---
**xSTX20 Protocol Specifications**

-   **Segmentation Format**: Each segment contains a portion of the complete inscription data.
-   **Initial Transaction**: The first transaction in a series includes metadata about the total number of segments.
-   **Reassembly**: Indexers reconstruct the data based on inherent ordering of transaction nonces.

**Extended Messaging Format**
    -   Structure: `x{total_segments}{...stx20_operation}`
    -   Example: `x1dstxs21000000;1000` 
    
**Simple Messaging Format**
    -   Structure: `{stx20_operation}`
    -   Example: `dstxs21000000;1000`

_The two operations above are functionally equivalent_

---

**New Operations**
-   **Inscribe**
    -   Structure: `{operation}{data}`
    -   Example Transactions:
		1.  `x11idata:image/png;base64,iVBORw0K`
		2. `GgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdV`
		3. `znAAAAAXNSR0IArs4c6QAAAKlJREFUKJFj`
		4. `jM57+P/JxckMxAAZ/VwGRnv7kv8MDAwMHx`
		5. `X58Crmv/+JgYGBgYEJl+LZ1VUofJgaJmym`
		6. `za6uYrhwaTeD2c31DAwMDAzZvqZwORZsGl`
		7. `Jb2xjMbq5n0JTlYjD1NWUw0HNlYNh8GrcN`
		8. `MMU84TUMBnquDCYqzHA5DA3YFBsmNmN3Ek`
		9. `zxQi53iBOgzkAGTFgV4wFwDcQohmvgv/+J`
		10. `oGJYxDGSmjQAx/049k1/mtcAAAAASUVORK`
		11. `5CYII=`
-   **Transfer Inscription**
    -   Structure: `{operation}{inscription_id}`
    -   Example Transaction: `t0`

**Example Use Case: Small Base64 Encoded Image**

1.  **Image Encoding**: Convert the image to a base64 encoded string. 
2.  **Extended Message**: Prefix with `x{total_segments}`.
3.  **Segmentation**: Divide the full string into 34-byte segments.
4.  **Transaction Series**: Send each segment in a series of STX transfers.
5.  **Reconstruction**: Indexers use the transaction nonces to order and reassemble the image.


**Open Source Commitment**

This protocol extension expands the capabilities of STX20, allowing for larger data inscriptions on the Stacks blockchain. It leverages the transaction nonce for efficient data sequencing, maintaining the protocol's commitment to decentralization and security.
