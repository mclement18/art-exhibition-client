# Art Exhibition Client

A test client to browse art exhibitions available on the [Art Exhibition API](https://github.com/mclement18/art-exhibition-api).

## Description

This [***Next.js***](https://nextjs.org/) front-end client allows to browse, see details and go to linked resourceses of the exhibitions stored in the Art Exhibition API. It uses [***Bootstrap***](https://getbootstrap.com/) as styling framework.

## Installation

Build the docker image and run it supplying the URL of the Art Exhibition API.
```bash
docker build -t art_exhibition_client:0.1.0 .
```
### Variables

The following varaibles are necessary for the app to work.

| Variable | Example Value |
| -------- | ------------- |
| **ART_EXHIBITION_API_URL** | http://localhost:4000 |

### Docker Compose

The `docker-compose.yml` file can be used to start both the backend (the API and the MongoDB) and the client.  
The Art Exhibition API image must be build beforehand and available.  
An example setup script for the DB is located `db_setup/mongo-init.js`.  
See the Art Exhibition API [***README.md***](https://github.com/mclement18/art-exhibition-api) for additional instructions to start the backend.
