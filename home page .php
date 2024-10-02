
<link rel="stylesheet" href="php .css"
    
<?php
// Start the session to check if the user is logged in
session_start();

// Check if the user is logged in, if not redirect to login page
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - My Website</title>
    <link rel="stylesheet" href="style.css"> <!-- Link to your CSS file -->
</head>
<body>
    <!-- Header Section -->
    <?php include('header.php'); ?>

    <!-- Main Content -->
    <main>
        <div class="welcome-message">
            <h1>Welcome, <?php echo $_SESSION['username']; ?>!</h1>
            <p>We are glad to have you on our platform. Explore the features below!</p>
        </div>

        <!-- Navigation Section -->
        <nav class="user-nav">
            <ul>
                <li><a href="profile.php">Profile</a></li>
                <li><a href="job_find.php">Find a Job</a></li>
                <li><a href="store.php">Buy & Sell Store</a></li>
                <li><a href="marriage.php">Marriage Services</a></li>
                <li><a href="contact.php">Contact Us</a></li>
            </ul>
        </nav>

        <!-- Section for Job Finding Feature -->
        <section class="features">
            <h2>Featured Services</h2>

            <!-- Example Feature: Job Finding -->
            <div class="feature">
                <h3>Find a Job</h3>
                <p>Looking for a new opportunity? Explore our job listings!</p>
                <a href="job_find.php" class="btn">Start Job Search</a>
            </div>

            <!-- Example Feature: Buy & Sell Store -->
            <div class="feature">
                <h3>Buy & Sell Store</h3>
                <p>Explore our marketplace to buy and sell products.</p>
                <a href="store.php" class="btn">Visit Store</a>
            </div>

            <!-- Example Feature: Marriage Services -->
            <div class="feature">
                <h3>Marriage Services</h3>
                <p>Find your perfect partner with our marriage services.</p>
                <a href="marriage.php" class="btn">Explore Marriage Services</a>
            </div>
        </section>
    </main>

    <!-- Logout Link -->
    <div class="logout">
        <a href="logout.php">Logout</a>
    </div>

    <!-- Footer Section -->
    <?php include('footer.php'); ?>
</body>
</html>