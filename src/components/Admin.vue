<template>
    <div>
<html>
<body>
    <div class="container">
        <aside>
            <div class="top">
                <div class="logo">
                    <img src="./images/logo.png">
                    <h2><b>LODGE</b><span class="primary"></span></h2>
                </div>
                <div class="close" id="close-btn">
                    <span class="material-icons-sharp"> close </span>
                </div>
            </div>

            <div class="sidebar">
                <a href = "index.php" class="active">
                    <span class="material-icons-sharp"> dashboard </span>
                    <h3>Dashboard</h3>
                    <span class="message-count"></span>
                </a>

                <a href = "Products.php" >
                    <span class="material-icons-sharp"> receipt_long </span>
                    <h3>Products</h3>
                </a>

                <a href = "About.php">
                    <span class="material-icons-sharp"> info </span>
                    <h3>About</h3>
                </a>

                
                <a href = "login.php">
                    <span class="material-icons-sharp"> logout </span>
                    <h3>Logout</h3>
                </a>
            </div>
        </aside>

        <!-- --------------END OF ASIDE SECTION--------------- -->

        <main>
            <h1>Admin Dashboard</h1>
            <h2></h2>

            <div class="casualties">
                <div class="deaths">
                    <span class="material-icons-sharp"> payments </span> <h3>Total No. of Sales</h3>
                    <h1>0</h1>
                    <div class="middle">
                    </div>
                </div>
        <!-- --------------END OF DEATHS--------------- -->

        <div class="injuries">
            <span class="material-icons-sharp"> monetization_on </span>
            <h3>Total No. of Profit</h3>
            <h1>0</h1>
            <div class="middle">
            </div>   
        </div>
        <!-- --------------END OF INJURIES--------------- -->


        <div class="missing">
            <span class="material-icons-sharp"> inventory_2 </span> <h3>Total No. of Stocks</h3>
            <h1>0</h1>
            <div class="middle">

            </div>

        </div>
        <!-- --------------END OF MISSING--------------- -->
    </div>
    <!-- --------------END OF CASUALTIES SECTION--------------- -->

    <div class="mapGraph">
        <h2>Products</h2>
        <div class="mapcontainer">
            <div id="map"></div>
        </div>      
    </div>
    <!-- --------------END OF MAP SECTION--------------- -->
 

    <!------------------------------------------------------------------------------------------------------------>
            <div class="news">
                <h3>Records</h3>
                <div class="newsupdate">
                    <div>

                    </div>
                </div>
            </div>
            <!------------------------END OF NEWS UPDATES------------------------------->
    

        </main>
        <!-- --------------END OF MAIN ----------------- -->

        <div class="right">
            <div class="top">
                <button id="menu-btn">
                    <span class="material-icons-sharp"> menu </span>
                </button>

                <div class="profile">
                    <div class="info">
                        <p>Hi! <b>User</b></p>
                        <small class="text-muted">Guest</small>
                    </div>
                    <div class="profile-photo">
                        <img src="./images/client.png">
                    </div>
                </div>
            </div>
            <!--------------------------------END OF TOP----------------------------------->
            <div  class="advisories">
                <h2>Notification</h2>
                <div class="tips">
                    <div class="icon">
                        <span class="material-icons-sharp">warning
                        </span>
                    </div>
                    <div class="right">
                        <div class="info">
                            
                        </div>
                    </div>
                </div>
            </div>

  
            <!--------------------------END OF EMERGENCY ALERT--------------------------->


            <div class="latest-updates">
                <h2>Information</h2>
                
                <div class="recentupdates">
                    <div class="recentupdate">
  
               </div>
            </div>

            <!-----------------------END OF LATEST UPDATES (WEATHER FORECAST)------------------------------------->

            <div  class="damages">
                <h2>Information</h2>
                <div class="cost">
                    <div class="icon">
                        <span class="material-icons-sharp">house
                        </span>
                    </div>
                    <div class="right">
                        <h3>Estimated Cost of ...</h3>
                        <div class="total">
                            <h1>0</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="damages">
                <div class="cost">
                    <div class="icon">
                        <span class="material-icons-sharp">location_city
                        </span>
                    </div>
                    <div class="right">
                        <h3>Estimated Cost of ...</h3>
                        <div class="total">
                            <h1>0</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="damages">
                <div class="cost">
                    <div class="icon">
                        <span class="material-icons-sharp">agriculture
                        </span>
                    </div>
                    <div class="right">
                        <h3>Estimated Cost of ...</h3>
                        <div class="total">
                        <h1>0</h1>
            
                        </div>
                    </div>
                </div>
            </div>
            <!-----------------------END OF DAMAGES------------------------->

            <div  class="advisories">
                <h2>Information</h2>
                <div class="tips">
                    <div class="icon">
                        <span class="material-icons-sharp">crisis_alert
                        </span>
                    </div>
                    <div class="right">
                        <div class="info">
                            
                        </div>
                    </div>
                </div>
            </div>
            <!----------------End of Advisories------------------>
                  
                </div>
            </div>
        </div>
 
    
</body></html>
</div>

</template>