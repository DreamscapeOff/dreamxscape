<?php

// Function to check cookie expiry and cooldown status
function checkCooldown() {
  try {
    // Retrieve cookie (replace 'your_cookie_name' with your actual cookie name)
    if (!isset($_COOKIE['email_cooldown'])) {
      throw new Exception('Missing cooldown cookie.'); // Throw exception for missing cookie
    }

    $cooldownValue = $_COOKIE['your_cookie_name'];
    $cooldownExpiry = strtotime($cooldownValue); // Convert expiry string to timestamp

    // Check if cookie has expired based on server time (more reliable)
    if ($cooldownExpiry < time()) {
      // Expired, remove the cookie for clarity
      print "cookie expired";
      setcookie('email_cooldown', '', time() - 3600, '/'); // Expire immediately
      return ['isCooldownActive' => false];
    }

    // Cooldown still active, return the cooldown value
    print "cookie still active?!";
    return ['isCooldownActive' => true, 'cooldownValue' => $cooldownValue];
  } catch (Exception $e) {
    // Handle errors (e.g., log the error)
    error_log('Error checking cooldown: ' + $e->getMessage()); // Concatenate for better logging
    return ['error' => 'An error occurred while checking cooldown.']; // Return error message
  }
}

$cooldownResponse = json_encode(checkCooldown());
echo $cooldownResponse;