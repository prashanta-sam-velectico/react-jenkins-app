pipeline {
     agent any
     stages {
          stage("start") {
            steps {
               echo "building started"
               sh "sudo chown -R jenkins:jenkins /home/velectic/node_code/expy-jenkins"
               sh "sudo rm -rf /home/velectic/node_code/expy-jenkins"
            }
        }
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {              
                sh "sudo cp -r ${WORKSPACE}/ /home/velectic/node_code/expy-jenkins/"
            }
        }
    }
}