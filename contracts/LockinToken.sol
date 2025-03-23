// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LockIn is ERC20, Ownable {

    constructor()
     ERC20("LockIn", "LTC") 
     Ownable(msg.sender) 
     {
        _mint(msg.sender, 7000000  * 10 ** 18);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
