document.write(`
    <script type="text/x-template" id = "calc-template">
      <div id = "calculator">
           <div class="calculator-logs">
            <span v-for="log in logs">{{ log }}</span>
          </div>

          <input type="string" class="calculator-input" v-model="value" @keyup.enter="getResult()">

          <div class="calculator-row">
            <div class="calculator-col">
              <button class="calculator-btn gray action" @click="clear()">C</button>
            </div>
            <div class="calculator-col">
              <button class="calculator-btn gray action" @click="del()">del</button>
            </div>
            <div class="calculator-col">
              <button class="calculator-btn gray action" @click="addExpression('i')">i</button>
            </div>
            <div class="calculator-col">
              <button class="calculator-btn accent action" @click="calculate('divide')">/</button>
            </div>
          </div>
          <div class="calculator-row">
            <div class="calculator-col">
              <button class="calculator-btn" @click="addExpression(7)">7</button>
            </div>
            <div class="calculator-col">
              <button class="calculator-btn" @click="addExpression(8)">8</button>
            </div>
            <div class="calculator-col">
              <button class="calculator-btn" @click="addExpression(9)">9</button>
            </div>
            <div class="calculator-col">
              <button class="calculator-btn accent action" @click="calculate('multiply')">*</button>
            </div>
          </div>
          <div class="calculator-row">
            <div class="calculator-col">
              <button class="calculator-btn" @click="addExpression(4)">4</button>
            </div>
            <div class="calculator-col">
              <button class="calculator-btn" @click="addExpression(5)">5</button>
            </div>
            <div class="calculator-col">
              <button class="calculator-btn" @click="addExpression(6)">6</button>
            </div>
            <div class="calculator-col">
              <button class="calculator-btn accent action" @click="calculate('subtract')">-</button>
            </div>
          </div>
          <div class="calculator-row">
            <div class="calculator-col">
              <button class="calculator-btn" @click="addExpression(1)">1</button>
            </div>
            <div class="calculator-col">
              <button class="calculator-btn" @click="addExpression(2)">2</button>
            </div>
            <div class="calculator-col">
              <button class="calculator-btn" @click="addExpression(3)">3</button>
            </div>
            <div class="calculator-col">
              <button class="calculator-btn accent action" @click="calculate('add')">+</button>
            </div>
          </div>
          <div class="calculator-row">
            <div class="calculator-col">
              <button class="calculator-btn" @click="addExpression(0)">0</button>
            </div>
            <div class="calculator-col">
              <button class="calculator-btn action" @click="addExpression('.')">.</button>
            </div>
            <div class="calculator-col wide">
              <button class="calculator-btn accent action" @click="enter()">Enter</button>
            </div>
          </div>
      </div>
    </script>

    <style>
    </style>
`);

