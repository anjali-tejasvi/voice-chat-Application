# Real- Time Voice Chat Application SRS

👉 Features:

- Registration
    - Registration should be done using the OTP system. This can be sent using the phone number or email address.
    - Need to collect the following info when registering:
        - Full Name
        - Profile Picture
        - Create Username

- Rooms
    - Authenticated user can see list of available public rooms.
    - User can filter rooms using search box
    - User can join existing room or create a new room
    - Creator of room can add other users as speakers
    - Room should have the following types
        - Public room
            
            Any Authenticated user can can see this room and can join the room
            
        - Closed room:
            
              This room can be joined only through the link.
            
- Room Users:
    
    Room will have 2 types of users
    
    1. Speakers
        
        People who can speak (they can mute/unmute themselves)
        
    2. Listeners
        
        people who can only listen.(mic muted by default).
        
        - Any user can leave the room
        
        Speaker can choose their Mic from available devices.
        
        Only creator of the room can delete the room.
        
- Profile
    - Users will have a user profile page. Any authenticated user can visit this page and follow that user.
    - User should have followers and following count on the profile page
- Login
    - User can login using OTP.
    - OTP will be sent on phone number or email address
- Logout
    - User can logout using logout button.
