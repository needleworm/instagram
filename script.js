document.addEventListener("DOMContentLoaded", 
    function(e){
        var configID = document.querySelector("#id i")
        var idText = document.querySelector("#id span")

        configID.addEventListener("click",
            function(e){
                idText.textContent = prompt("새로운 아이디를 입력하세요")
            }
        )
        
        var profileEditButton = document.querySelector("#profile_info button")
        var userInfo = document.querySelector("#userInfo")
        var summary = document.querySelector("#summary") 
        var profileDetail = document.querySelector("#profileDetail") 
        var changing = false

        profileEditButton.addEventListener("click",
            function (e) {
                if (changing) {
                    var _userInfo = userInfo.querySelector("input").value
                    var _summary = summary.querySelector("input").value
                    var _profileDetail = profileDetail.querySelector("input").value

                    userInfo.innerHTML = _userInfo
                    summary.innerHTML = _summary

                    if (_profileDetail.startsWith("http")){
                        _profileDetail = "<a href=" + _profileDetail + ">" + _profileDetail + "</a>"
                    } 

                    profileDetail.innerHTML = _profileDetail
                    
                    e.target.textContent = "프로필 편집"
                    changing = false

                } else {
                    var _userInfo = userInfo.textContent
                    var _summary = summary.textContent
                    var _profileDetail = profileDetail.textContent

                    userInfo.innerHTML = "<input value=" + _userInfo + "></input>"
                    summary.innerHTML = "<input value=" + _summary + "></input>"
                    profileDetail.innerHTML = "<input value=" + _profileDetail + "></input>"
                    
                    e.target.textContent = "프로필 편집 완료"
                    changing  =true
                }
            }
        )

        var profile_pic = document.querySelector("#profile_pic .circle_pic")
        profile_pic.addEventListener("mouseover",
            function (e){
                e.target.style.filter = "grayscale(50%)"
            }
        )
        
        profile_pic.addEventListener("mouseleave",
            function (e){
                e.target.style.filter = "grayscale(0%)"
            }
        )
        
        profile_pic.addEventListener("click",
            function (e){
                profile_pic.setAttribute("src", prompt("이미지 url을 입력해 주세요!"))
            }
        )
    }
)

