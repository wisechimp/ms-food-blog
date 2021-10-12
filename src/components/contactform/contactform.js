import React, { useState, createRef } from 'react'
import { navigate } from 'gatsby'
import Recaptcha from 'react-google-recaptcha'

import * as contactformStyles from './contactform.module.css'

const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY
if (typeof RECAPTCHA_KEY === 'undefined') {
    throw new Error(`
    Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined! 
    You probably forget to set it in your Netlify build environment variables. 
    Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
    Note this demo is specifically for Recaptcha v2
    `)
  }

  function encode(data) {
      return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

const ContactForm = () => {
	const [state, setState] = useState({})
	const recaptchaRef = createRef()

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.target
		const recaptchaValue = recaptchaRef.current.getValue()
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': form.getAttribute('name'),
				'g-recaptcha-response': recaptchaValue,
				...state,
			}),
		})
		.then(() => navigate(form.getAttribute('action')))
		.catch((error) => alert(error))
	}

  return (
    <div className={contactformStyles.contactForm}>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <noscript>
          <p>This form won’t work with Javascript disabled</p>
        </noscript>
        <fieldset>
          <div>
            <p class="hidden">
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <input type="hidden" name="form-name" value="contact" />
            <p className={contactformStyles.formRow}>
              <label
                className={contactformStyles.formLabel}
                htmlFor="contactName"
              >
                Name:
              </label>
              <input
                className={contactformStyles.formInput}
                type="text"
                id="contactName"
                name="contactName"
                placeholder="Your name"
                required="required"
                onChange={handleChange}
              />
            </p>
            <p className={contactformStyles.formRow}>
              <label className={contactformStyles.formLabel} htmlFor="email">
                Email:
              </label>
              <input
                className={contactformStyles.formInput}
                type="text"
                id="email"
                name="email"
                placeholder="username@email.com"
                required="required"
                onChange={handleChange}
              />
            </p>
            <p className={contactformStyles.formRow}>
              <label className={contactformStyles.formLabel} htmlFor="message">
                Message:
              </label>
              <textarea
                className={contactformStyles.formInput}
                id="message"
                name="message"
                placeholder="Your message"
                required="required"
                rows="5"
                onChange={handleChange}
              />
            </p>
            <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
            <button className={contactformStyles.formButton} type="submit">
              Send Message
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default ContactForm