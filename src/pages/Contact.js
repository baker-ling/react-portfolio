import React, {useState} from 'react';

const isValidEmailAddress = (email) => {
  const pattern = /^\S+@\S+$/giu;
  return pattern.test(email);
}

export default function Contact(props) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [warningSuppressionFlags, setWarningSuppresionFlags] = useState({ name: true, email: true, message: true })
  const [validationWarnings, setValidationWarnings] = useState({
    name: 'You must enter a name.',
    email: 'You must provide an email address to reach you.',
    message: 'You must enter a message.'
  })

  const handleFormChange = (event) => {
    const {target} = event;
    const inputValue = target.value;

    switch (target.name) {
      case 'contact-form-name':
        if (inputValue.trim()) {
          setValidationWarnings({...validationWarnings, name: null});
        } else {
          setValidationWarnings({...validationWarnings, name: 'You must enter a name.'});
        }
        setFormState({...formState, name: inputValue});
      break;
      case 'contact-form-email':
        if (!inputValue.trim()) {
          setValidationWarnings({...validationWarnings, email: 'You must provide an email address to reach you.'});
        } else if (!isValidEmailAddress(inputValue.trim())) {
          setValidationWarnings({...validationWarnings, email: 'The email address you entered is not a valid email address. Please double-check it.'});
        } else {
          setValidationWarnings({...validationWarnings, email: null});
        }
        setFormState({...formState, email: inputValue});
      break;

      default: // contact-form-message
        if (inputValue.trim()) {
          setValidationWarnings({...validationWarnings, message: null});
        } else {
          setValidationWarnings({...validationWarnings, message: 'You must enter a message.'});
        }
        setFormState({...formState, message: inputValue});
      break;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validationWarnings.name && !validationWarnings.email && ! validationWarnings.message) {
      window.alert('Thank you for the message. The send message feature has not been implemented yet. Please send your message via email to brian.baker.bdb@gmail.com.')
    } else {
      window.alert('Please complete the contact form before sending your message.');
    }

  }

  return (
    <main>
      <h2>Contact Me</h2>
      <p>If you would like to contact me about work opportunities or anything else, please fill out the form below with your name, email address, and message. I will get back to you as soon as possible. </p>
      <form name="contact-form" onSubmit={handleFormSubmit}>
        <div className='form-item'>
          <label htmlFor="contact-form-name">Name</label>
          <input type="text" name="contact-form-name" id="contact-form-name"
            placeholder='Enter your name'
            onChange={handleFormChange}
            onBlur={() => { setWarningSuppresionFlags({ ...warningSuppressionFlags, name: false }) }}
            value={formState.name} />
          {(!warningSuppressionFlags.name && validationWarnings.name) ? 
            <div className='warning'>{validationWarnings.name}</div> : ''}
        </div>
        <div className='form-item'>
          <label htmlFor="contact-form-email">Email Address</label>
          <input type="email" name="contact-form-email" id="contact-form-email"
            placeholder='Enter your email address.'
            onChange={handleFormChange} 
            onBlur={() => { setWarningSuppresionFlags({ ...warningSuppressionFlags, email: false }) }}
            value={formState.email}/>
          {(!warningSuppressionFlags.email && validationWarnings.email) ? 
            <div className='warning'>{validationWarnings.email}</div> : ''}
        </div>

        <div className='form-item'>
          <label htmlFor="contact-form-message">Message</label>
          <textarea name="contact-form-message" id="contact-form-message"
            placeholder='Type your message here.'
            className='resize-y'
            rows='4'
            onChange={handleFormChange}
            onBlur={() => { setWarningSuppresionFlags({ ...warningSuppressionFlags, message: false }) }} 
            value={formState.message}/>
          {(!warningSuppressionFlags.message && validationWarnings.message) ? 
            <div className='warning'>{validationWarnings.message}</div> : ''}
        </div>

        <input type='submit' name='submit' id='contact-form-submit' value="Send Message"
         className='font-bold border-yellow-500 border-2 bg-yellow-300 text-stone-900 px-4 py-1 rounded active:bg-yellow-900 active:text-stone-200'/>
      </form>

      <p>You can also reach me via <a href="mailto:brian.baker.bdb@gmail.com">email</a>.</p>
    </main>
  );
}