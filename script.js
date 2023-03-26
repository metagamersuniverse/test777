const provider = new ethers.providers.JsonRpcProvider("https://arbitrum-mainnet.infura.io/v3/185d1de50d01413ba2ff0cb51a5bb965");
                const contractAddress1 = "0x239C7f34895feC644ae373F22D8Ffd29D75D8138";
                const contractAbi1 = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"buyLiqFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"buyLotoFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"buyMktFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"buyTotalFees","type":"uint256"}],"name":"BuyFeesUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"randomNumber","type":"uint256"},{"indexed":false,"internalType":"address","name":"wallet","type":"address"},{"indexed":false,"internalType":"uint256","name":"prizeAmount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"chainlinkGenerated","type":"bool"}],"name":"LotteryWinner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"extraAmount","type":"uint256"}],"name":"LottoPlusReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"requestId","type":"uint256"},{"indexed":false,"internalType":"uint256[]","name":"randomWords","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"payment","type":"uint256"}],"name":"RequestFulfilled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"requestId","type":"uint256"},{"indexed":false,"internalType":"uint32","name":"numWords","type":"uint32"}],"name":"RequestSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"sellLiqFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sellLotoFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sellMktFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sellTotalFees","type":"uint256"}],"name":"SellFeesUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pair","type":"address"},{"indexed":true,"internalType":"bool","name":"value","type":"bool"}],"name":"SetAutomatedMarketMakerPair","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"}],"name":"UpdateUniswapV2Router","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_addedHolderList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_buy_totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_holderIndexes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_listOfHolders","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_lotteryContract","outputs":[{"internalType":"contract Tripple7","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_lotteryExecuteAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_lotteryRound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_lottoPlusExecuteAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_minAmountToParticipate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_sell_totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_swapState","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"automatedMarketMakerPairs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"state","type":"bool"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"state","type":"bool"}],"name":"excludeFromLottery","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_requestId","type":"uint256"}],"name":"getRequestStatus","outputs":[{"internalType":"uint256","name":"paid","type":"uint256"},{"internalType":"bool","name":"fulfilled","type":"bool"},{"internalType":"uint256[]","name":"randomWords","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromLottery","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastRequestId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lotteryParticipantsAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"lotoNumber","type":"uint256"}],"name":"lotteryWinnerInfo","outputs":[{"components":[{"internalType":"uint256","name":"randomNumber","type":"uint256"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint256","name":"prizeAmount","type":"uint256"},{"internalType":"bool","name":"chainlink","type":"bool"}],"internalType":"struct TrippleSeven._winnerInfoStruct","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pickingWinnerStateFix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_requestId","type":"uint256"},{"internalType":"uint256[]","name":"_randomWords","type":"uint256[]"}],"name":"rawFulfillRandomWords","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"recoverLink","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"requestIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"s_requests","outputs":[{"internalType":"uint256","name":"paid","type":"uint256"},{"internalType":"bool","name":"fulfilled","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setAutomatedMarketMakerPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"buyLiqFee","type":"uint256"},{"internalType":"uint256","name":"buyLotoFee","type":"uint256"},{"internalType":"uint256","name":"buyMktFee","type":"uint256"}],"name":"setBuyFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"setLiqFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"setMktFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"sellLiqFee","type":"uint256"},{"internalType":"uint256","name":"sellLotoFee","type":"uint256"},{"internalType":"uint256","name":"sellMktFee","type":"uint256"}],"name":"setSellFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setSwapTokensAtAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"state","type":"bool"}],"name":"setswapState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"addr","type":"address"}],"name":"updateLotteryContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateLotteryExecuteAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateLotteryMinTokensAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateMinLinkBalanceToUseChainlink","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateUniswapV2Router","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
                const contract1 = new ethers.Contract(contractAddress1, contractAbi1, provider);

                const contractAbi2 = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositFounds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"reciever","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"rewardSent","type":"event"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalRewardsGiven","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"reciever","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
                const contractAddress2 = "0xd9e41dd9efc314ed265aa3b1df4a752e16cb4896";
                const contract2 = new ethers.Contract(contractAddress2, contractAbi2, provider);
                
                async function getLotteryRound() {
                  try {
                    const lotteryRound = await contract1._lotteryRound();
                    console.log('Lottery Round:', lotteryRound.toString());
                    document.getElementById("output").innerHTML = "<p> " + lotteryRound.toString() + "</p>";
                    document.getElementById("output").style.display = "block";
                  } catch (error) {
                    console.error('Error getting lottery round:', error);
                  }
                }
                
        
        async function getWinnerInfo() {
          const round = document.getElementById("round").value;
          const winnerInfo = await contract1.lotteryWinnerInfo(round);
          const prizeAmount = (winnerInfo.prizeAmount / 1e18).toFixed(5);
          document.getElementById("winnerOutput").innerHTML = "<p>Win By Random Number: " + winnerInfo.randomNumber.toString() + "</p><p>Wallet Address: " + winnerInfo.wallet + "</p><p>Prize Amount: " + prizeAmount + " ETH</p>";
          document.getElementById("winnerOutput").style.display = "block";
        }
        
        async function getLatestWinnerInfo() {
          try {
            // Retrieve the latest round number
            const latestRound = await contract1._lotteryRound();
        
            // Retrieve the winner information for the latest round
            const winnerInfo = await contract1.lotteryWinnerInfo(latestRound);
            const prizeAmount = (winnerInfo.prizeAmount / 1e18).toFixed(5);
        
            // Display the winner information in the winnerOutput1 div element
            document.getElementById("winnerOutput1").innerHTML = "<p>" + winnerInfo.wallet + "</p>";
            document.getElementById("winnerOutput1").style.display = "block";
          } catch (error) {
            console.error('Error getting latest winner info:', error);
          }
        }
        
        function checkProbability() {
          const walletCount = document.getElementById("walletCount").value;
          const participants = Number(document.getElementById("lotteryParticipantsAmount").textContent);
          if (!participants) {
            document.getElementById("probabilityResult").innerHTML = "<p>Lottery not started yet.</p>";
            document.getElementById("probabilityResult").style.display = "block";
            return;
          }
          const probability = calculateProbability(participants, walletCount);
          document.getElementById("probabilityResult").innerHTML = "<p>" + probability + "%</p>";
          document.getElementById("probabilityResult").style.display = "block";
        }
        

        async function getLotteryProbability() {
          try {
            // Retrieve the current number of participants from the smart contract
            const participants = await contract1.lotteryParticipantsAmount();
            console.log('ParticipantsAmount:', participants.toString());
        
            // Calculate the probability of winning based on the current number of participants
            const probability = calculateProbability(participants);
            console.log('Probability:', probability);
        
            // Update the HTML output of the page with the current number of participants and probability
            document.getElementById("lotteryParticipantsAmount").innerHTML = "<p> Total Participants: " + participants.toString() + "</p>";
            document.getElementById("lotteryProbability").innerHTML = "<p>  " + probability + " %</p>";
          } catch (error) {
            // Handle any errors that occur while retrieving the number of participants
            console.error('Error getting ParticipantsAmount:', error);
            document.getElementById("lotteryProbability").innerHTML = "<p> Not started yet </p>";
          }
        }
        
        
        async function getWalletBalance() {
            const walletAddress = "0xD9E41dD9EFc314eD265aA3b1Df4A752e16Cb4896"; // replace with your desired wallet address
            const balance = await provider.getBalance(walletAddress);
            const formattedBalance = ethers.utils.formatEther(balance);
            document.getElementById("balanceOutput").innerHTML = "<p> " + formattedBalance + " ETH</p>";
            document.getElementById("balanceOutput").style.display = "block";
          }
          
          async function getLotteryParticipantsAmount() {
            try {
              const ParticipantsAmount = await contract1.lotteryParticipantsAmount();
              console.log('ParticipantsAmount:', ParticipantsAmount.toString());
              document.getElementById("lotteryParticipantsAmount").innerHTML = "<p> " + ParticipantsAmount.toString() + "</p>";
              document.getElementById("lotteryParticipantsAmount").style.display = "block";
            } catch (error) {
              console.error('Error getting ParticipantsAmount:', error);
            }
          }
          
          async function getContractTotalRewards() {
            const totalRewardsGiven = await contract2.totalRewardsGiven();
            if (totalRewardsGiven.gt(0)) {
            document.getElementById("totalRewardsOutput").innerHTML = "<p>Total Rewards Given: " + totalRewardsGiven.toString() + "</p>";
            document.getElementById("totalRewardsOutput").style.display = "block";
            } else {
            document.getElementById("totalRewardsOutput").innerHTML = "<p>Not Started yet.</p>";
            document.getElementById("totalRewardsOutput").style.display = "block";
            }
            }
            
            async function getContractOwner() {
            const owner = await contract2.owner();
            document.getElementById("contractOwnerOutput").innerHTML = "<p>Contract Owner: " + owner + "</p>";
            document.getElementById("contractOwnerOutput").style.display = "block";
            }
