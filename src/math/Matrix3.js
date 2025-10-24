export class Matrix3 {
  constructor() {
    this.elements = new Float32Array(9);
    this.identity();
  }

  identity() {
    const e = this.elements;
    e[0]=1; e[3]=0; e[6]=0;
    e[1]=0; e[4]=1; e[7]=0;
    e[2]=0; e[5]=0; e[8]=1;
    return this;
  }

  setFromMatrix4(m) {
    const me = m.elements;
    const e = this.elements;
    e[0]=me[0]; e[1]=me[1]; e[2]=me[2];
    e[3]=me[4]; e[4]=me[5]; e[5]=me[6];
    e[6]=me[8]; e[7]=me[9]; e[8]=me[10];
    return this;
  }

  multiply(m) {
    const ae = this.elements;
    const be = m.elements;
    const te = new Float32Array(9);

    for (let i=0; i<3; i++) {
      for (let j=0; j<3; j++) {
        te[j*3+i] = ae[i]*be[j*3] + ae[i+3]*be[j*3+1] + ae[i+6]*be[j*3+2];
      }
    }

    this.elements = te;
    return this;
  }
      }
