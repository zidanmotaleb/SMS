-- This file is used to create a new user;
-- for now, to create a new user, change the first
-- student into the new userid and the second student appearing
-- in the line below to the password of the new user;
-- then, connect as admin/admin to mysql server using:
-- mysql -u admin -padmin
-- then at the sql prompt type: source create_user_psw.sql
-- make sure you are in the correct directory.
-- after running the command, type quit; to close it.
use sms;
insert into user values("student3", "students3" );
