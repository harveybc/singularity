# singularity

The [singularity platform](https://github.com/harveybc/singularity) allows 
extending existing evolutionary algorithms to a decentralized architecture to 
provide collaboration, scalability and fault-tolerance in an optimization process. 


## Installation

This process is described for Ubuntu 17.10 but it can be used also on Windows and other OS.

### Step 1 - Setup Dependencies

sudo apt-get install node.js npm  
 
### Step 2 - Setup Singularity from GitHub

git clone https://github.com/harveybc/singularity  
cd singularity  
npm install  

### Step 3 - Configure your IP and port (For both Web Interface and API)

nano .env  

Configure your IP address or hostname in the field HOST and an available port 
for listening connections in the field PORT. You can also configure an external 
database if not using the default sqlite 3.


### Step 4 - Configure a startup/restart script

nano res  

For creating the test database and executing the program, make sure the file contains:  

\#!/bin/bash  
git pull  
rm database/development.sqlite  
./ace migration:run  
./ace db:seed  
npm run serve:dev  

After editing, change the permission of the file to be executable:  

chmod 777 res  

### Step 5 - Start your node

./res  

### Step 6 - Verify its Working

Access the web interface from a browser in the address and port you configured.
Some default test processes and users are created and you can use them to configure
your evolutionary algorithm as shown in the following section.  

## Brief Description of Usage  

More detailed documentation coming soon.

### Step 1 - Configure a Process in Singularity.

After installing singularity, access the web interface from the IP address or host 
name and port with the default credentials, you configured in step 3 for example:  

http://192.168.0.241:3338/processes/admin?username=harveybc&pass_hash=$2a$04$ntNHmofQoMoajG89mTEM2uSR66jKXBgRQJnCgqfNN38aq9UkN4Y6q  

You can change the initial credentials in the file database/seeds/Authentication.js,
also you can configure the ip addresses for the devices in your network in the file 
/database/seeds/Neighbors.js and executing the following commands to reset and populate the database:  

rm database/development.sqlite  
./ace migration:run  
./ace db:seed   


### Step 2 - Configure Your Evolutionary Algorithm.  

Your evolutionary algoritm must perform the migration operator that you decide
between iterations, for this you must make an HTTP GET request from your program
with your process hash, username and pass_hass to check if a new optimum has been 
found since the last one and if your algorithm
has found some parameters with better fitness than the remote ones, you must 
migrate the fittest specimens in a population or the representatives of 
groups or species depending on your needs using an HTTP POST to report your new optimum.

An example of usage and the parameters that the requests must have can be found on the [gym-forex environment](https://github.com/harveybc/gym-forex)

### Step 3 - Monitor Your Optimization Process.

Access the web interface and click on your process to access its detailed view
with a graphic of the evolution of the performance in time.

Work In Progress. Proper documentation coming soon. There is a poster and the contents of my MSE thesis (this project) in PDF format in the root folder.