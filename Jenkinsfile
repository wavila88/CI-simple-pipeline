pipeline {
    agent any 
    tools {
      nodejs '18.5.0'
    }

    options{
      timeout(time: 2, unit: 'MINUTES')
    }

 stages {
        stage('example') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }
    }
}