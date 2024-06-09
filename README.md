<h1 align="center">HerbsPedia - API Documentation</h1>

## Introduction

This documentation provides details about the HerbsPedia REST API endpoints. The code is a Node.js with Express.js module that exposes many endpoints with specific routes

## Base URL

The base URL for almost all API endpoints is: `https://api-endpoint-dgonny5rzq-et.a.run.app/`

---

#### 1. Get All Plants

- _Endpoint:_ GET /api/plants
- _Description:_ Returns all available herbal plant data.
- _Response Body Example:_

  ```json
  {
  "id" :10,
  "nama": "Akar brotowali",
  "deskripsi": "Akar brotowali adalah bagian dari tanaman brotowali (Tinospora crispa) yang tumbuh di wilayah tropis seperti Indonesia, India, dan Filipina. Tanaman ini dikenal dengan batangnya yang menjalar dan memiliki permukaan kasar serta daunnya yang berbentuk hati. Akar brotowali memiliki tekstur keras dan warna cokelat hingga abu-abu, dengan rasa yang sangat pahit. Tanaman ini tumbuh subur di daerah hutan atau tempat dengan kelembapan tinggi dan sering ditemukan merambat pada pohon atau pagar.",
  "kegunaan": "Akar brotowali telah lama digunakan dalam pengobatan tradisional untuk berbagai manfaat kesehatan. Akar ini dikenal karena sifatnya yang antipiretik, antidiabetik, antiinflamasi, dan imunomodulator. Ekstrak dari akar brotowali sering digunakan untuk menurunkan demam, mengatasi gangguan pencernaan, dan membantu mengontrol kadar gula darah pada penderita diabetes. Selain itu, akar brotowali juga dipercaya dapat memperkuat sistem kekebalan tubuh, membantu detoksifikasi, dan meredakan nyeri serta peradangan pada kondisi seperti arthritis. Dengan kandungan senyawa aktif seperti alkaloid, flavonoid, dan terpenoid, akar brotowali menjadi salah satu bahan alami yang bermanfaat dalam menjaga kesehatan secara keseluruhan."

  }
  {
  "id": 2,
  "nama": "Jambu Biji",
  "deskripsi": "Daun jambu biji memiliki berbagai khasiat kesehatan yang telah digunakan dalam pengobatan tradisional selama berabad-abad. Daun ini kaya akan vitamin C, serat, dan antioksidan yang penting untuk menjaga kesehatan tubuh. Vitamin C dalam daun jambu biji membantu meningkatkan sistem kekebalan tubuh, melindungi dari infeksi, dan mempercepat penyembuhan luka. Serat yang terdapat dalam daun jambu biji mendukung pencernaan yang sehat dan membantu mengontrol kadar gula darah, sementara antioksidan yang terkandung di dalamnya berfungsi melawan radikal bebas, melindungi sel-sel tubuh dari kerusakan, dan mengurangi risiko penyakit kronis. Selain itu, daun jambu biji juga dikenal memiliki sifat antiinflamasi dan antibakteri, yang dapat membantu meredakan peradangan dan melawan infeksi. Dengan berbagai manfaat ini, daun jambu biji merupakan tambahan berharga dalam upaya menjaga kesehatan secara alami.",
  "kegunaan": "Daun jambu biji tidak hanya digunakan sebagai bahan makanan tambahan dalam masakan atau sebagai obat tradisional, tetapi juga memiliki sejumlah manfaat kesehatan yang berharga. Kandungan nutrisi yang melimpah, termasuk vitamin C dan serat, menjadikan daun ini bermanfaat dalam menjaga kesehatan tubuh secara menyeluruh. Vitamin C dalam daun jambu biji membantu meningkatkan sistem kekebalan tubuh, memperkuat pertahanan tubuh terhadap infeksi dan penyakit. Selain itu, serat dalam daun jambu biji mendukung pencernaan yang sehat, membantu mengatur kadar gula darah, dan menjaga kesehatan jantung. Daun jambu biji juga mengandung senyawa antioksidan yang dapat melawan radikal bebas, membantu melindungi sel-sel tubuh dari kerusakan, dan memperlambat penuaan sel. Dengan demikian, konsumsi daun jambu biji secara teratur dapat memberikan manfaat signifikan bagi kesehatan dan kesejahteraan tubuh secara keseluruhan."
  }
  {
  "id": 17,
  "nama": "Akar alang-alang",
  "deskripsi": "Akar alang-alang merupakan bagian dari tanaman alang-alang (Imperata cylindrica), yang dikenal juga sebagai ilalang atau cogon grass. Tanaman ini memiliki daun yang panjang, ramping, dan tajam di ujungnya, serta sering ditemukan tumbuh liar di padang rumput, tepi jalan, dan lahan kosong. Akar alang-alang berbentuk serabut, berwarna putih kekuningan, dan cenderung merayap di bawah tanah, membuat tanaman ini sulit diberantas. Tanaman ini mampu bertahan di berbagai kondisi tanah dan cuaca, menjadikannya salah satu tanaman yang sangat invasif.",
  "kegunaan": "Akar alang-alang telah lama digunakan dalam pengobatan tradisional karena berbagai manfaat kesehatannya. Akar ini dikenal memiliki sifat diuretik yang efektif untuk membantu melancarkan buang air kecil dan mengatasi masalah pada saluran kemih, seperti infeksi atau batu ginjal. Selain itu, akar alang-alang memiliki sifat antiinflamasi dan antipiretik yang dapat membantu meredakan demam dan peradangan. Kandungan alami dalam akar alang-alang, seperti asam kersik dan manitol, juga berperan dalam membersihkan darah dan membantu mengatasi hipertensi. Penggunaan akar alang-alang dalam bentuk rebusan atau ekstrak sangat umum di kalangan masyarakat yang memanfaatkan tanaman ini untuk menjaga kesehatan ginjal dan sistem peredaran darah."
  }

  ```

  ```

  ```

#### 2. Get Plant by ID

- _Endpoint:_ GET /api/plants/1
- _Description:_ Returns herbal plant data based on a specific ID.
- _Parameters:_
  - id: The unique ID of the herb you want to take.
- _Response Body Example:_

  ```json
  {
  "id" :1,
  "nama": "Akar brotowali",
  "deskripsi": "Akar brotowali adalah bagian dari tanaman brotowali (Tinospora crispa) yang tumbuh di wilayah tropis seperti Indonesia, India, dan Filipina. Tanaman ini dikenal dengan batangnya yang menjalar dan memiliki permukaan kasar serta daunnya yang berbentuk hati. Akar brotowali memiliki tekstur keras dan warna cokelat hingga abu-abu, dengan rasa yang sangat pahit. Tanaman ini tumbuh subur di daerah hutan atau tempat dengan kelembapan tinggi dan sering ditemukan merambat pada pohon atau pagar.",
  "kegunaan": "Akar brotowali telah lama digunakan dalam pengobatan tradisional untuk berbagai manfaat kesehatan. Akar ini dikenal karena sifatnya yang antipiretik, antidiabetik, antiinflamasi, dan imunomodulator. Ekstrak dari akar brotowali sering digunakan untuk menurunkan demam, mengatasi gangguan pencernaan, dan membantu mengontrol kadar gula darah pada penderita diabetes. Selain itu, akar brotowali juga dipercaya dapat memperkuat sistem kekebalan tubuh, membantu detoksifikasi, dan meredakan nyeri serta peradangan pada kondisi seperti arthritis. Dengan kandungan senyawa aktif seperti alkaloid, flavonoid, dan terpenoid, akar brotowali menjadi salah satu bahan alami yang bermanfaat dalam menjaga kesehatan secara keseluruhan."

  }


  ```

  ```

  ```

- _Error Handling:_
  - If a plant with the requested ID is not found, the API will respond with a 404 status and an error message.

### The Usage

- Make sure the server is running with the index.js node running.
- To access plant data, use an endpoint that suits your application or integration needs.
