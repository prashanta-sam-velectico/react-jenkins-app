pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /home/velectic/node_code/expy-jenkins"
                sh "sudo cp -r ${WORKSPACE}/build/ /home/velectic/node_code/expy-jenkins/"
            }
        }
    }
}