pipeline {
    agent any 
    tools {
       nodejs 'node-18.5.0'
    }

    options{
      timeout(time: 2, unit: 'MINUTES')
    }

    stages {
        stage('Install dependencies') { 
            steps {
               
                bat 'npm i'
            }
        }
        stage('Run test') { 
            steps {
                bat 'npm test'
            }
        }
    }
}