const { expect } = require("chai");
const request = require("request");
const { MongoClient } = require('mongodb');
const puppeteer = require('puppeteer');
let url = 'http://localhost:3000/api/car';
let car = {path:'',title:''}

describe('test POST api', function() {
    it('returns statusCode of 200', function(done) {
       car.path='images/car1.jpg',
       car.title='car1'
        
        request(url, function(error, response, car) {
            if (error) {
                done(error);
            } else {
                expect(response.statusCode).to.equal(200);
                done();
            }
        });
    });
});

describe('test GET api', function(){
    it('returns statusCode of 200', function(done){
        request(url, function(a,b,c){
            let responseObj = JSON.parse(c);
            expect(responseObj.statusCode).to.equal(200);
            done();
        });
    });
});


describe('Webpage Opening Test', function () {
  it('should open a webpage successfully', async function () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('http://localhost:3000/index.html'); 
    const title = await page.title();
    expect(title).to.be.a('string');
    expect(title).to.equal('Cars'); 

    await browser.close();
  });
});

describe('MongoDB Connection Test', function () {
    it('should connect to MongoDB successfully', async function () {
      this.timeout(10000); 
      const uri = 'mongodb+srv://themixerbase123:iloveDOGS@cluster0.riqgga9.mongodb.net/?retryWrites=true&w=majority';
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
      try {
        await client.connect(); 
        expect(client).to.not.be.null;
        console.log('Connected successfully ');
      } finally {
        await client.close(); 
      }
    });
  });