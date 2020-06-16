<html>
  <body>
    <?php
    echo "Thank you, ".$_POST['fName']." ".$_POST['lName'];
    echo "Confirmed your request with the following information: ";
    echo "<br />";
    echo "<br />";
    echo "Full Name: ".$_POST['fName']." ".$_POST['lName'];
    echo "<br />";
    echo "Country: ".$_POST['country'];
    echo "<br />";
    echo "Email: ".$_POST['email'];
    echo "<br />";
    echo "<br />";
    echo "I will contact you sooner or later! Can't wait for our fun coffee time!";
     ?>
   </body>
</html>
