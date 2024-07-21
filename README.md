# Thryft-Ship
Take Home Assignment
Instructions: Using Next.js as the frontend, please create the following features. This should take no more than 3 hours. None of your code will be used in production. All code will solely be used for assessment purposes.
Input Shipment Details:
Collect name, address, and remaining input fields from the Shipping Information Figma.
You are expected to follow the general design guidelines, but should create your own designs for additional components or move things around where they make sense.
Add/remove multiple shipping packages within a shipment. Packages should include:
Name
Image
Price
Quantity
Specific style
Users should be able to change the quantity and style of the packages. These packages can be named whatever and can be hard-coded options; we’re more interested in the UI implementation.
GraphQL Backend (Optional):
Extra points for creating a quick, hard-coded GraphQL backend that sends available packages that can be purchased on the form screen and connecting it with the frontend.
Confirmation Modal:
Create a confirmation modal that summarizes what the user has inputted.
Error Messages:
Display error messages for incomplete inputs.
Summary:
After form submission, show a summary of the entered data.
Mobile Design:
Implement the mobile design, try to get it as close to how the Figma link has things designed.

I created a nextjs application from scratch and then implemented the frontend before working on functionality. I used shadcn components because they fit the desgins on figma, especially the dialog component. I was a little rusty working with the frontend, so I had a bit of a slow start but I got back into it for the most part. Some challenges were the lack of image files. I had to make do and make my own because the components on figma were still in vector form. I would've approached this differently if I knew there was a deadline, but I didn't so it was a little rushed. Overall it was a pretty fun assignment and I believe that I followed the original design quite closely with what I was given.

I wasn't able to recreate the background for the success page because I didn't have the image file, and I probably could have made it if I had been more knowledgable about the due date. I could have possibly implemented the GraphQL backend if I had the time, but I have the hooks set up to store and send the form data.

I would have changed the submit/check popup because its design currently is pretty bland and I also would have to think about how to list the products if there was an absurd amount. 
