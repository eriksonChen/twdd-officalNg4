#  台灣代駕官網

## 1.最新活動
### 台灣代駕目前最新活動
![img](get_event.jpg)

### Method
> `GET` **get_event**
> 


### Paramaters

 無

### Response

>`status`: **1:正常，0:錯誤**
>
>`msg`:錯誤回傳的訊息
>
>`event`:目前所有活動的資料
>
>`pic`:最新消息要用的圖片(size:500x332),回傳相對位置
>
>`url`:活動頁面的網址
>
>`txt`:活動標題


```
{
    "status":1,
    "msg":"回傳錯誤訊息",
    "event":[
        {   "pic":"img/xxxx.jpg",
            "url":"http://event.twdd.com.tw/2016/",
            "txt":"立即分享得300元現金"
        },{
			"pic":"img/xxxx.jpg",
            "url":"http://event.twdd.com.tw/xms/index",
            "txt":"開車不喝酒，喝酒找代駕"
        },{
            "pic":"img/xxxx.jpg",
            "url":"http://event.twdd.com.tw/2017/ny/index",
            "txt":"尾牙試手氣，無料抽紅包"
        }
    ]
}
```

## 2.最新消息
### 台灣代駕目前最新消息
![img](get_news.jpg)

### Method
> `GET` **get_news**
> 


### Paramaters

 無

### Response

>`status`: **1:正常，0:錯誤**
>
>`msg`:錯誤回傳的訊息
>
>`news`:目前所有最新消息的資料
>
>`data`:發佈日期（格式yyyy/mm/dd）
>
>`title`:消息的標題
>
>`des`:消息的說明


```
{
    "status":1,
    "msg":"回傳錯誤訊息",
    "news":[
        {
            "date":"2017/02/01",
            "title":"紅包抽抽樂二重抽中奬名單看這裡～～ 恭喜參加的朋友們～～",
            "des":"好康報您知：使用邀請碼推薦親朋好友使用台灣代駕服務賺現金哦～ 使用新會員註冊登錄的優惠及邀請碼優惠活動不得合併使用！ 詳情請連結至 http://event.twdd.com.tw/2016/"
        },
        {
            "date":"2017/02/02",
            "title":"好康報您知：利用邀請碼推薦親朋好友使用台灣代駕服務，賺現金哦～",
            "des":"......"
        }
    ]
}
```


## 3.特約商店及合作夥伴

### 回傳特約商店及合作夥伴圖片
![img](get_partner.jpg)

### Method
> `GET` **get_partner**

### Paramaters

 無

### Response

>`status`: **1:正常，0:錯誤**
>
>`msg`:錯誤回傳的訊息
>
>`store`:目前所有特約商店圖片(size:320x192)
>
>`partner`:目前所有合作夥伴圖片(size:320x192)
>

```
{
    "status":1,
    "msg":"回傳錯誤訊息",
    "store":["img/xxxx.jpg", "img/xxxx.jpg", ...],
    "partner":["img/xxxx.jpg", "img/xxxx.jpg", ...],
}
```


## 4.預約服務

### 上傳使用者預約專案相關資料
![img](reserve.jpg)

### Method
> `POST` **reserve**

### Paramaters

 Param    | Type   | Description |Option
:--------:|:------:|:-----------:|:-----:
`name`	    |string  | 	申請人姓名 |M
`phone`|string  | 	聯絡電話       |M
`add` | string | 出發地址 |M
`date`| string  | 	預約日期  |M
`people`| number | 	代駕需求人數 |O
`token`| string | 	驗證碼 |M


`M - Mandatory, O - Optional`

### Response
>`status`: **1:正常，0:錯誤**
>
>`msg`:錯誤回傳的訊息
>


```
{
    "status":1,
    "msg":"回傳錯誤訊息"
}
```

## 5.目前說明會場次

### 讀取目前說明會的場次
![img](sign.jpg)

### Method
> `GET` **get_orientation**

### Paramaters
 無

### Response

>`status`: **1:正常，0:錯誤**
>
>`msg`:錯誤回傳的訊息
>
>`no`: 場次編號
>
>`orientation`:所有說明會資訊
>
>`area`: 場次區域
>
>`date`: 場次日期
>
>`time`: 場次時間
>
>`add`: 場次詳細地點
>
>`type`: 報名狀態  ( blue:即將額滿，red:額滿，green:正常)

```
{
    "status":1,
    "msg":"回傳錯誤訊息",
    "orientation":[
        {
            "no":"11",
            "area":"台北",
            "date":"2017/02/01",
            "time":"星期二 15:00~16:00",
            "add":"台中市西屯區台灣大道四段771號9樓（東家大樓）",
            "type":"blue"
        },{
            "no":"12",
            "area":"台中",
            "date":"2017/02/01",
            "time":"星期二 15:00~16:00",
            "add":"台中市西屯區台灣大道四段771號9樓（東家大樓）",
            "type":"red"
        },...
    ]
}
```


## 6.報名說明會

### 上傳使用者報名資料
![img](sign.jpg)

### Method
> `POST` **sign**

### Paramaters

 Param    | Type   | Description |Option
:--------:|:------:|:-----------:|:-----:
`name`	    |string  | 	申請人姓名 |M
`phone`	|string  | 	聯絡電話   |M
`email` 	| string | 	Email     |M
`id`		| string | 	身份證 		|M
`no`		| string | 	場次編號  	|M
`code`		| string | 	推薦序號 	|O
`token`	| string | 	驗證碼 		|M


`M - Mandatory, O - Optional`

### Response
>`status`: **1:正常，0:錯誤**
>
>`msg`:錯誤回傳的訊息
>


```
{
    "status":1,
    "msg":"回傳錯誤訊息"
}
```

