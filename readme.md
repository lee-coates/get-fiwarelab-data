# Get Fiware Lab Data
This repository is devoted to exploratory data analysis of Fiware Lab's Orion Context Broker global instance. The Fiware Foundation makes this resource available to researches implementing Context Information Management Systems for Smart Cities.

## Scope of Work
The goal of this work is to understand how to pull data from a pub/sub context broker that makes data available via the [Orion API NGSIv2](https://github.com/telefonicaid/fiware-orion/blob/master/doc/manuals/orion-api.md). The result of running the container this project builds is a web application available at http://localhost:8000/ to explore subscriptions to the context broker.

## Steps to Run
If you just want to run the code locally, use these commands:
```
# pull instructions to come
podman run -dp 8000:3000 --name get-fiwarelab-data get-fiwarelab-data:v0.1

```

## Steps to Build
If you want to build this project and modify it, use these commands to get the code and rebuild the image:
```
git clone https://github.com/lee-coates/get-fiwarelab-data.git
npm install
npm start
podman image build -f dockerfile -t get-fiwarelab-data:{your_tag} .

```
