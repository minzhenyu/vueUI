  let a=[{ 
          "id": "1", 
          "title": "分类",
           "child": [ {
                      "id": "1_1", 
                      "title": "家电",
                      "pid": "1", 
                       "child": [ { 
                               "id": "1_1_1",
                                "title": "电视机", 
                                 "pid": "1_1", 
                                   "child": [] 
                              }, {
                                "id": "1_1_2", 
                               "title": "洗衣机", 
                                "pid": "1_1", 
                                "child": [] 
                             } ] 
	            }, { 
	             "id": "1_2", 
	              "title": "服饰", 
                   "pid": "1", 
                   "child": [ { 
                              "id": "1_2_1", 
                              "title": "男装", 
                               "pid": "1_2", 
                                "child": [] 
                              }, { 
                                "id": "1_2_2", 
                                "title": "女装", 
                                "pid": "1_2", "child": [] 
                            } ]
                   } ] 
              } 
        ]
		consoel.log(a)