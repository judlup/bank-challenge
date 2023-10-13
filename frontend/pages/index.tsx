import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bank Challenge</title>
        <meta name="description" content="Bank Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Bank Challenge</h1>
        <hr />
        <h4>Hola Usuario</h4>
        <div>Mi Cuenta</div>
        <div>Depositar</div>
        <div>Retirar</div>
        <div>Movimientos</div>
        <div>Reportes</div>
        <div>Configuración</div>
      </div>

      <hr />

      <div>
        <h1>Signin</h1>
        <hr />
        <div>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <span>Create an account</span>
          <button>Signup</button>
        </div>
      </div>

      <div>
        <h1>Signup</h1>
        <hr />
        <div>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button>Signup</button>
        </div>
      </div>

      <hr />

      <div>
        <h1>My Account</h1>
        <hr />
        <div>
          <div>
            <button>Assign account name</button>
          </div>
          <div>Owner: Julián Luna</div>
          <div>Name: My Account</div>
          <div>Email: judlup@gmail.com </div>
          <div>Account Number: 573164907627 </div>
          <div>Balance: 100</div>
        </div>
      </div>

      <hr />

      <div>
        <h1>Deposit</h1>
        <hr />
        <div>
          <div>Balance: 100</div>
          <select>
            <option>Select Account Number</option>
            <option value="573164907627">573164907627</option>
          </select>
          <input type="text" placeholder="Amount" />
          <button>Deposit</button>
        </div>
      </div>

      <hr />

      <div>
        <h1>Withdraw</h1>
        <hr />
        <div>
          <div>Balance: 100</div>
          <select>
            <option>Select Account Number</option>
            <option value="573164907627">573164907627</option>
          </select>
          <input type="text" placeholder="Amount" />
          <button>Withdraw</button>
        </div>
      </div>

      <hr />

      <div>
        <h1>Movements</h1>
        <hr />
        <div>
          <div>
            <div>Ref</div>
            <div>Deposit</div>
            <div>10000</div>
            <div>573164907627</div>
            <div>573164907627</div>
            <div>2021-08-10</div>
          </div>
          <hr />
          <div>
            <div>Ref</div>
            <div>Deposit</div>
            <div>10000</div>
            <div>573164907627</div>
            <div>573164907627</div>
            <div>2021-08-10</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
