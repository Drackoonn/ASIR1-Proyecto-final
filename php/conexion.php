<?php
class conexion{
    private $servername;
    private $username;
    private $password;
    private $dbname;
    public $conexion;
    public function __construct(){
        $this ->servername = "localhost";
        $this ->username = "root";
        $this ->password = "";
        $this ->dbname = "NombreBBDD";
    }
    function conectar(){
        $this ->conexion = new mysqlinew mysqli($this->servername, $this->username, $this->password,$this->dbname);
        $this ->conexion-> set_charset("utf8");
    }
    function cerrar(){
        $this ->conexion->close();
    }
    // if (!($conn->connect_error)) {

    // $query = "SELECT * FROM peliculas ORDER BY anio";
    // $stmt = $conn->prepare($query);
    // $stmt->execute();
    // $result = $stmt->get_result(); // get the mysqli resultset (in an array) 
    //                             // we need to fetch this resultset to extract the data
    // $jsonArray= array(); // create array to store the fetched data 
    // for ($i = 0; $i<$result->num_rows; $i++) { 
    //     $row = $result->fetch_assoc();
    //     array_push($jsonArray,$row);
    // }
    // $stmt->close();  // close prepared statement
    // $conn->close();

    // header('Content-Type: application/json');  // add dthe required header
    // echo json_encode($jsonArray); //  print the json enncoded data
    // }else{
    // die("Connection failed: " . $conn->connect_error);
    // } 
}
?>