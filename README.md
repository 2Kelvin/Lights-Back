# Lights Back

![KPLCslides](https://github.com/2Kelvin/lights-back/assets/85868026/ce283a08-2b22-452c-91e0-3b44691b4abd)

`lights-back` is a web application tailored to do one simple job, help a client report a power issue to the power company and get the help they need as soon as possible. Basically, acting as an easy and straightforward portal between the client and the power company.

The UI is pretty straightforward and user friendly. It's basically a form that a client fills reporting their power problem and in return this data is sent in form of an email to the power company. This was made possible through the `emailjs` service.

The tips section is tailored to help clients create a better email and even offer technical help on a task like creating a google maps pin. The aim is to make the email sent be as helpful as it can to the power company inorder for them to efficiently help the client.

On successful send of an email, the web application displays a email sent successfully card to notify the client that their request has been sent to the power company and they can rest easy waiting for them to respond to their issue and grievances.On the other hand, if the email wasn't sent a respective error message is displayed so that the client can retry sending the email again.

To avoid sending blank emails, the web app cannot send an email if the following three mandatory fields haven't been filled: email subject, name, email and message field. The pin location and phone number fields are optional but if filled can offer a better response experience to the client since the power company can directly reach them and tailor a way forward to offer a solution to their problem.

If the client just wanted a different method to reach the company, it's provided in the 'other contacts' section, either through a direct phone line to the company or through a USSD.

![otherKPLCslides](https://github.com/2Kelvin/lights-back/assets/85868026/ca8d6828-3e5c-4ef1-909d-2e0c970a3bee)

In summary, this project's main goal was to reduce the time spent to researching for a valid way to reach the power company and get the help they need as soon as possible.