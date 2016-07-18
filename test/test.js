const expect = require('expect.js')
const Countries = require('../index.js')

describe('Countries', () => {
  describe('findByCountryCode()', () => {
    const response = Countries.findByCountryCode('AW')

    it('response', () => {
      expect(response).to.be.an('object')
      expect(response).to.only.have.keys('error', 'statusCode', 'message', 'data')
      expect(response.data).to.not.be.empty()
      if(response.data.length) {
        expect(response.error).to.be(false)
        expect(response.statusCode).to.be(200)
        expect(response.message).to.be.equal('OK')
        expect(response.data[0]).to.have.property('cca2', 'AW')
      }
    });
  });

  describe('findByCCN3()', () => {
    const response = Countries.findByCCN3('533')

    it('response', () => {
      expect(response).to.be.an('object')
      expect(response).to.only.have.keys('error', 'statusCode', 'message', 'data')
      expect(response.data).to.not.be.empty()
      if(response.data.length) {
        expect(response.error).to.be(false)
        expect(response.statusCode).to.be(200)
        expect(response.message).to.be.equal('OK')
        expect(response.data[0]).to.have.property('ccn3', '533')
      }
    });
  });

  describe('findByCCA3()', () => {
    const response = Countries.findByCCA3('ABW')

    it('response', () => {
      expect(response).to.be.an('object')
      expect(response).to.only.have.keys('error', 'statusCode', 'message', 'data')
      expect(response.data).to.not.be.empty()
      if(response.data.length) {
        expect(response.error).to.be(false)
        expect(response.statusCode).to.be(200)
        expect(response.message).to.be.equal('OK')
        expect(response.data[0]).to.have.property('cca3', 'ABW')
      }
    });
  });

  describe('findByCIOC()', () => {
    const response = Countries.findByCIOC('ARU')

    it('response', () => {
      expect(response).to.be.an('object')
      expect(response).to.only.have.keys('error', 'statusCode', 'message', 'data')
      expect(response.data).to.not.be.empty()
      if(response.data.length) {
        expect(response.error).to.be(false)
        expect(response.statusCode).to.be(200)
        expect(response.message).to.be.equal('OK')
        expect(response.data[0]).to.have.property('cioc', 'ARU')
      }
    });
  });

  describe('findByCapital()', () => {
    const response = Countries.findByCapital('Oranjestad')

    it('response', () => {
      expect(response).to.be.an('object')
      expect(response).to.only.have.keys('error', 'statusCode', 'message', 'data')
      expect(response.data).to.not.be.empty()
      if(response.data.length) {
        expect(response.error).to.be(false)
        expect(response.statusCode).to.be(200)
        expect(response.message).to.be.equal('OK')
        expect(response.data[0]).to.have.property('capital', 'Oranjestad')
      }
    });
  });

  describe('findBySubRegion()', () => {
    const response = Countries.findBySubRegion('Caribbean')

    it('response', () => {
      expect(response).to.be.an('object')
      expect(response).to.only.have.keys('error', 'statusCode', 'message', 'data')
      expect(response.data).to.not.be.empty()
      if(response.data.length) {
        expect(response.error).to.be(false)
        expect(response.statusCode).to.be(200)
        expect(response.message).to.be.equal('OK')
        response.data.forEach((val) => {
          expect(val).to.have.property('subregion', 'Caribbean')
        })
      }
    });
  });





});