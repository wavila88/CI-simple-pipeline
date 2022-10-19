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
                cmd_exec('echo "Buils starting..."')
                  cmd_exec('npm i')
            }
        }
        stage('Run test') { 
            steps {
                  cmd_exec('npm test')
            }
        }
    }
}