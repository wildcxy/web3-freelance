// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ProofCredential is ERC721, Ownable {
    uint256 public constant MAX_SUPPLY = 100;
    uint256 public totalMinted;
    string private baseTokenURI;

    mapping(address => bool) public hasMinted;

    error AlreadyMinted();
    error SoldOut();

    constructor(string memory initialBaseURI)
        ERC721("Proof Credential", "PROOF")
        Ownable(msg.sender)
    {
        baseTokenURI = initialBaseURI;
    }

    function mint() external {
        if (hasMinted[msg.sender]) revert AlreadyMinted();
        if (totalMinted >= MAX_SUPPLY) revert SoldOut();

        hasMinted[msg.sender] = true;
        totalMinted += 1;
        _safeMint(msg.sender, totalMinted);
    }

    function setBaseURI(string calldata newBaseURI) external onlyOwner {
        baseTokenURI = newBaseURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseTokenURI;
    }
}
