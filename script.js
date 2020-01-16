window.onload = function () {
    var changeColor = new Vue({
        el: "#app",
        data: {
            userColor: '',
            color: '',
            backupColor: '',
        },
        methods: {
            changecolor: function () {
                this.color = this.userColor;
                document.getElementById("main-block").style.backgroundColor = this.color;
                document.getElementById("result").innerText = `Ваш цвет фона теперь "${this.color.toUpperCase()}"`;
                document.getElementById("wrapper").style.backgroundColor = "white";
                this.userColor = '';
            },
            restorecolor: function () {
                document.getElementById("main-block").style.backgroundColor = "white";
                document.getElementById("result").innerText = '';
            }
        }
    });
};