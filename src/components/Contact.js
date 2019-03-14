import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <section
        id="contact-us"
        className="contact__form__container vh-100 bg--gold c--black d-flex align-items-center justify-content-center"
      >
        <div className="container container--md">
          <form
            name="contact"
            method="POST"
            className="contact__form"
            netlify="true"
          >
            <div className="contact__form__head">
              <h3 className="contact__form__headline">
                We want to hear from you!
              </h3>
              <p className="contact__form__subheadline">
                Please leave as much detail as you can and we will contact you
                as soon as possible.
              </p>
            </div>
            <div className="row contact__form__inner">
              <div className="col-12 col-md-6">
                <p>
                  <label>First Name:</label>
                  <input type="text" name="firstName" />
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p>
                  <label>Last Name:</label>
                  <input type="text" name="lastName" />
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p>
                  <label>Your Email:</label>
                  <input type="email" name="email" />
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p>
                  <label>Reason for contact:</label>
                  <select name="reason">
                    <option value="placeholder" />
                    <option value="general-question">General Question</option>
                    <option value="full-menu">Request full menu</option>
                    <option value="location-info">Location information</option>
                    <option value="audi">Audi</option>
                  </select>
                </p>
              </div>
              <div className="col-12">
                <p>
                  <label>
                    Message: <i>Please leave a detailed message.</i>
                  </label>
                  <textarea name="message" />
                </p>
              </div>
            </div>
            <p className="d-flex justify-content-center mt-30">
              <button className="btn" type="submit">
                Send
              </button>
            </p>
          </form>
        </div>
      </section>
    )
  }
}
