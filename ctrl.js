angular.module('BlankApp', ['ngMaterial', 'ngMessages'])
    .controller('ctrlM', function($scope){
        $scope.appTitle = 'TECNOBIN: Como reduzir o E-lixo no Brasil e no mundo';
        
        $scope.showC = function(){
            if($scope.showCup == undefined){
                $scope.showCup = true;
            }else{
                $scope.showCup = undefined;
            }
        }

        // FAKE DATA
        $scope.pro = {
            celular: 20,
            teclado: 10,
            monitor: 40,
            'micro computador': 100,
            televisao: 30,
            geladeira: 10,
            'fone de ouvido':5,
            'maquina de lavar': 100,
            'geladeira': 250,
        };
        $scope.ti = {
            'Mcdonalds':{t:90, desc:'mc lanche por 10,00'},
            'lojas rener':{t:100, desc:'10% de desconto em compras'},
            'netflix':{t:250, desc:'um mes gratis de assinatura'},
        };

        $scope.showDescontos = function(){
            if($scope.produtos == undefined){
                $scope.produtos = {
                    celular: 20,
                    teclado: 10,
                    monitor: 40,
                    'micro computador': 100,
                    televisao: 30,
                    geladeira: 10,
                    'fone de ouvido':5,
                    'maquina de lavar': 100,
                    'geladeira': 250,
                };
            }else{
                $scope.produtos = undefined;
            }
            
        }

        $scope.showTipos = function(){
            if($scope.tipos == undefined){
                $scope.tipos = {
                    'mac donalds':{t:90, desc:'mc lanche por 10,00'},
                    'lojas rener':{t:100, desc:'10% de desconto em compras'},
                    'netflix':{t:250, desc:'um mes gratis de assinatura'},
                }
            }else{
                $scope.tipos = undefined;
            }
        }

        $scope.upload = function(){
            document.getElementById('main').style.display = 'none';
            document.getElementById('uploadScreem').style.visibility = 'visible';
        }


        $scope.newCard = undefined;
        $scope.makeDeal = function(){
            if($scope.prod1 + $scope.prod2 + $scope.prod3 - $scope.cupon >= 0){
                console.log('feita troca');
                $scope.upView = false;
                document.getElementById('uploadScreem').style.display = 'none';
            }
            else{
                if($scope.prod1 + $scope.prod2 - $scope.cupon >= 0){
                    console.log('feita troca');
                    $scope.upView = false;
                    document.getElementById('uploadScreem').style.display = 'none';
                }else{
                    if($scope.prod1 - $scope.cupon >= 0){
                        console.log('feita troca');
                        $scope.upView = false;
                        document.getElementById('uploadScreem').style.display = 'none';
                    }else{
                        console.log('funfa memo');
                    }
                }
            }
            document.getElementById('main').style.display = 'flex';
            $scope.newCard = true;
        }


    });