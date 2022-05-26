<?php
    class Modelo_Grafico{
        private $conexion;
        function __construct()
        {
            require_once('./php/conexion.php');
            $this -> conexion = new conexion();
            $this ->conexion->conectar();
        }
        function TraerDatosGraficoBar(){
            $sql = "Escribir consulta";
            $arreglo = array();
            if($consulta =  $this->conexion->conexion->query($sql){
                while($consulta_VU = mysqli_fetch_array($consulta)){
                    $arreglo[] = $consulta_VU;
                }
                return $arreglo;
                $this->consulta->cerrar();
            })
        }
    }
?>