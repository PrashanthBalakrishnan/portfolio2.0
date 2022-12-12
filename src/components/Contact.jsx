import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9s0q8hj',
        'template_clguttg',
        form.current,
        'LeYw2K83XtZi97N5V'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white ">
          Contact Me
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-white "
            >
              Name:
            </label>
            <input
              type="text"
              name="user_name"
              id="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow-sm  border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-white "
            >
              Email:
            </label>
            <input
              type="email"
              id="subject"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="user_email"
              className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Subject"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-white "
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="6"
              className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className="text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-[1.2rem] px-4 py-2 text-center mr-2 mb-2"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};
